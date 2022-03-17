import React from 'react';

import { Container } from './styles';
import portalecom from '../../../../public/portalecom.png';

function Apresentation() {
  return (
    <Container>
      <div>
        <h1 className="project-header">
          <span className="span-color">{'< '}</span>
          Projetos
          <span className="span-color">{' />'}</span>
        </h1>

        <div className="projetos">
          <div>
            <h1>
              <span className="span-color">{'< '}</span>
              Portal Ecommerce (Zema)
              <span className="span-color">{' />'}</span>
            </h1>
            <div className="image">
              <img src={portalecom} alt="portalecom" />
              <span className="redirects">Não participei da criação desse portal, mas já atuei muito nele, portanto ele tem um espacinho no meu coração e no portfólio </span>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Etiam
                non mollis magna. Aenean dignissim
                mauris id felis molestie, suscipit
                pulvinar sapien tristique. Sed gravida
                mattis felis eu molestie. Pellentesque
                velit neque, accumsan sit amet iaculis ut,
                ornare ac nulla. Vestibulum sollicitudin
                lorem erat, vitae consectetur elit varius
                sed. Cras tortor magna, iaculis et orci vel,
                tristique semper nulla. Maecenas porttitor est
                nec magna sodales aliquam. Mauris a elit interdum,
                dapibus odio ac, blandit nulla. Curabitur justo ante,
                pretium a lectus ut, ultrices porta urna. Nunc vestibulum
                aliquam ante, sed luctus purus interdum sit amet. Sed lobortis
                sagittis lacus ac iaculis. Donec auctor, nibh ac semper cursus,
                nisl diam maximus orci, vitae varius nulla leo eu lectus. Fusce
                eget lectus ultrices, malesuada sem sed, dapibus ipsum. Nam non imperdiet massa.

              </p>
            </div>
          </div>
          <div className="dummyContent">
            <h1>Projeto 2</h1>
            <p>Resumo aqui de tudo que o projeto faz e tals²</p>
          </div>
        </div>

      </div>

    </Container>
  );
}

export default Apresentation;
