import 'dotenv/config';
import app from './app';
import { conectarAoDatabase } from './database';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  conectarAoDatabase();
  console.log(`A aplicação está rodando na porta http://localhost:${port}`);
});
