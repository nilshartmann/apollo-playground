import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress } from 'graphql-server-express';
import { graphiqlExpress } from 'graphql-server-express';
import initDemoModel from './initDemoModel';
import createSchema from './api/schema';

const repositories = initDemoModel();
const schema = createSchema(repositories);



const PORT = 3000;
var app = express();

app.use(
	'/graphql',
	bodyParser.json(),
	graphqlExpress({ schema })
);

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT, () => console.log(`😜 Server running on ${PORT}`));
