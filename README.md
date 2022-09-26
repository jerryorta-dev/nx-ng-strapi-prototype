

See Udemy Strapi Server Repo [here](https://github.com/jerryorta-dev/udemy-strapi-project)

# NxNgStrapiPrototype

`ng serve` to start prototype in development mode.

# NgRX Entity Store

`libs/strapi/domain/src/lib/+state/strapi-posts`

The model files where generated from Strapi Swagger Docs and are located at

`libs/strapi/domain/src/lib/+state/strapi-posts/models-from-strapi`


# Generate Strapi TypeScript Interface Files

Swagger docs needs to be installed in Strapi:


[See docs](https://docs.strapi.io/developer-docs/latest/plugins/documentation.html#installation)

Installation:

```
npm run strapi install documentation
```

Set minimal configuration at `src/extensions/documentation/documentation/config/settings.json`

```
{
  "info": {
    "title": "Sample Pet Store App",
    "description": "This is a sample server for a pet store.",
    "termsOfService": "http://example.com/terms/",
    "contact": {
      "name": "API Support",
      "url": "http://www.example.com/support",
      "email": "support@example.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.1"
  }
}
```

Start Strapi and initial documentation will be generated ( updates require a different procedure ). The `full_documentation.json` is located at `src/extensions/documentation/documentation/1.0.0/full_documentation.json`.

### Generate typescript interface files fall data structures:


1. Copy this file from  `src/extensions/documentation/documentation/1.0.0/full_documentation.json`, and upload to [https://editor.swagger.io/](https://editor.swagger.io/); You will see errors, ignore them.
2. Select `Generate Client` from the header menu
3. Select `typescript-angular`
4. Wait for zip file to downlaod
5. Unzip file
6. Copy the files under `./model` to angular project.


