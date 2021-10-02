# Workbox PWA

PWA created using [Workbox](https://developers.google.com/web/tools/workbox)

### [Demo](https://angfire-dc0b5.firebaseapp.com/)

### Running the project
make sure to have [lite-server](https://www.npmjs.com/package/lite-server) installed 

```
npm run serve
```


### About the project
This PWA uses service worker created using the [workbox-cli](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/cli)

### [Workbox CLI](https://developers.google.com/web/tools/workbox/guides/generate-service-worker/cli)
- Have the project in a dist or public folder
- Install workbox-cli globally `npm install workbox-cli --global`
- Start the wizard `workbox wizard` answer the questions
- `workbox-config.js` file is created, which includes configuration for source `swSrc` and destination `swDest` serviceworker file also includes details for precaching
- Create a new file eg `sw-wb.js` file, this file will be used to write all the service worker code
- Run `workbox injectManifest` , a service worker file will be created in the project folder (as per the setup in config file)



### Important Links
- [Service Worker Packages](https://developers.google.com/web/tools/workbox/modules)
- [Convert code using import statements to use workbox-sw](https://developers.google.com/web/tools/workbox/modules/workbox-sw#convert_code_using_import_statements_to_use_workbox-sw)
- [Workbox Strategies](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies)
- [PWA Assets Generator](https://www.npmjs.com/package/pwa-asset-generator)


