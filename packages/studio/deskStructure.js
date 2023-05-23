import { FaPalette } from 'react-icons/fa';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { BsType, BsViewList } from 'react-icons/bs';
import { HiOutlineOfficeBuilding, HiOutlineColorSwatch } from 'react-icons/hi';
import ButtonDesignPreview from './preview/ButtonDesignPreview';

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('page').title('Structured Pages'),
      S.documentTypeListItem('soloGuidePage').title('Solo Guide Pages'),
      S.documentTypeListItem('flexListingPage').title('Flex Listing Pages'),
      S.documentTypeListItem('navMenu').title('Navigation Menus'),
      S.divider(),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('formNetlify').title('Forms'),
      S.documentTypeListItem('colorOption').title('Color Options'),
      S.listItem()
        .title('Design Options')
        .icon(HiOutlineColorSwatch)
        .child(
          S.list()
            .title('Design Options')
            .items([
              S.listItem()
                .title('Section Design Options')
                .schemaType('sectionDesignSet')
                .child(
                  S.documentTypeList('sectionDesignSet')
                    .title('Section Design Sets')
                    .child((documentId) =>
                      S.document().documentId(documentId).schemaType('sectionDesignSet'),
                    ),
                ),
              S.listItem()
                .title('Button Design Options - MUI')
                .schemaType('btnDesignMui')
                .child(
                  S.documentTypeList('btnDesignMui')
                    .title('Button Design Sets')
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('btnDesignMui')
                        .views([
                          S.view.form(),
                          S.view.component(ButtonDesignPreview).title('Preview'),
                        ]),
                    ),
                ),
              S.listItem()
                .title('Form Design Options')
                .schemaType('formStyle')
                .child(
                  S.documentTypeList('formStyle')
                    .title('Form Design Set')
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('formStyle')
                        .views([S.view.form()]),
                    ),
                ),
            ]),
        ),
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('General Settings')
                .icon(MdSettings)
                .child(S.document().schemaType('generalSettings').documentId('generalSettings')),
              S.listItem()
                .title('Theme - Palette')
                .icon(FaPalette)
                .child(S.document().schemaType('palette').documentId('palette')),
              S.listItem()
                .title('Theme - Typography')
                .icon(BsType)
                .child(S.document().schemaType('typography').documentId('typography')),
              S.listItem()
                .title('Theme - Spacing')
                .icon(BsViewList)
                .child(S.document().schemaType('customSpacing').documentId('customSpacing')),
              S.listItem()
                .title('Solo Guide Page Hero Layout')
                .icon(MdSettings)
                .child(S.document().schemaType('layoutSpg').documentId('layoutSpg')),
            ]),
        ),
      S.listItem()
        .title('Company Info')
        .icon(HiOutlineOfficeBuilding)
        .child(
          S.list()
            .title('Company Info')
            .items([
              S.listItem()
                .title('Contact Info')
                .icon(MdBusiness)
                .child(S.document().schemaType('contactInfo').documentId('contactInfo')),
              S.documentTypeListItem('socialInfo').title('Social Info'),
              S.documentTypeListItem('companyLogo').title('Company Logos'),
            ]),
        ),
      S.divider(),
    ]);
