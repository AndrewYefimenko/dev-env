import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';
/* eslint-disable no-console */
jsf( schema ).then( function ( createdShema ) {
  const json = JSON.stringify( createdShema );
  fs.writeFile( "./src/api/db.json", json, function ( err ) {
    if ( err ) {
      return console.log( chalk.red( err ) );
    }
    console.log( chalk.green( "Mock data generated." ) );
  } );
});