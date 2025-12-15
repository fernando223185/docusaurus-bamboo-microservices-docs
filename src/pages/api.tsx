import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function ApiPage(): JSX.Element {
  return (
    <Layout
      title="API Documentation"
      description="Interactive API documentation for Bamboo Cloud Services"
    >
      <div style={{ padding: '20px' }}>
        <h1>🚀 Bamboo Cloud Services API</h1>
        <p>
          Documentación interactiva de la API de Bamboo Cloud Services.
          Puedes probar los endpoints directamente desde esta página.
        </p>
        
        <BrowserOnly fallback={<div>Cargando documentación API...</div>}>
          {() => (
            <SwaggerUI
              url="/openapi/bamboo-api.yaml"
              deepLinking={true}
              presets={[
                // @ts-ignore
                SwaggerUI.presets.apis,
                // @ts-ignore  
                SwaggerUI.presets.standalone
              ]}
              plugins={[
                // @ts-ignore
                SwaggerUI.plugins.DownloadUrl
              ]}
              layout="StandaloneLayout"
              tryItOutEnabled={true}
              supportedSubmitMethods={['get', 'post', 'put', 'delete', 'patch']}
            />
          )}
        </BrowserOnly>
      </div>
    </Layout>
  );
}