import { getCardById } from '../../cards/cards';
import { getExamplesById } from '../../cards/examples';
import CardLogo from '../../components/dashboard/card/CardLogo';
import beautify from 'js-beautify';
import { paths } from '../../app/routes';
import { useParams, Redirect } from 'react-router-dom';
import TableNoData from '../../components/tableNoData/tableNoData';

function CardDescription() {
  const { id } = useParams();
  const card = getCardById(Number(id));
  const cardExamples = getExamplesById(Number(id));

  console.log(card);

  const cardLogoStyles = {
    wrapper: {
      margin: '0 auto',
      height: '100px',
      width: '100px',
      borderRadius: 0,
    },
    image: {
      maxHeight: '100px',
      maxWidth: '100px',
    },
  };

  if (card) {
    return (
      <div className="cardPage">
        <CardLogo
          wrapperStyle={cardLogoStyles.wrapper}
          imageStyle={cardLogoStyles.image}
          card={card}
        ></CardLogo>
        <h1>{card.name}</h1>
        <h2>{card.description}</h2>
        <h3>Examples:</h3>
        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>Request</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              {cardExamples.examples.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.request}</td>
                    <td>
                      <pre>
                        <code>
                          {beautify(row.response, {
                            indent_size: 2,
                          })}
                        </code>
                      </pre>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {cardExamples.examples.length ? '' : <TableNoData />}
        </div>
      </div>
    );
  } else {
    return <Redirect to={paths.system.notFound} />;
  }
}

export default CardDescription;
