/**
 * This plugin contains all the logic for setting up the singletons
 */

import { PreviewPane } from "./previewPane/PreviewPane";

// Schema type objects
const objectTypes = ['navigation'];

export const singletonPlugin = (types) => {
  return {
    name: 'singletonPlugin',
    document: {
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem) => !types.includes(templateItem.templateId)
          )
        }

        return prev
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev, { schemaType }) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
}

export const pageStructure = ({ types, apiVersion, previewSecretId }) => {
  return (S) => {
    const singletonItems = types.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name)
            .views([
              // Default form view
              S.view.form(),
              // Preview
              typeDef.name !== 'settings' && S.view
                .component((props) => (
                  <PreviewPane
                    previewSecretId={previewSecretId}
                    apiVersion={apiVersion}
                    {...props}
                  />
                ))
                .title('Preview'),
            ])
        )
    })

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => {
        return !types.find((singleton) => {
          if (singleton.name === listItem.getId()) {
            return true
          } else if (objectTypes.includes(listItem.getId())) {
            return true
          }
        })
      }

    )

    return S.list()
      .title('Content')
      .items([...singletonItems, S.divider(), ...defaultListItems])
  }
}
