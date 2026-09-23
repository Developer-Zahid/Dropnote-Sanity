import type { StructureResolver } from 'sanity/structure'
import { CogIcon } from '@sanity/icons/Cog'
import { HomeIcon } from '@sanity/icons/Home'
import { DocumentsIcon } from '@sanity/icons/Documents'
import { DatabaseIcon } from '@sanity/icons/Database'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Base')
    .items([
      // ── Group 1: Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Site Settings')),

      S.divider(),

      // ── Group 2: Pages
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentTypeListItem('homePage').title('Home Page').icon(HomeIcon)
              .child(S.document().schemaType('homePage').documentId('homePage').title('Home Page')),
            ])
        ),

      S.divider(),

      // ── Group 3: CMS
      S.listItem()
        .title('CMS')
        .icon(DatabaseIcon)
        .child(
          S.list()
            .title('CMS Collections')
            .items([
              S.documentTypeListItem('post'),
              S.documentTypeListItem('category'),
              S.documentTypeListItem('author'),
            ])
        ),
    ])