const dynamodbPath = `${__dirname}/models/dynamodb/schema`;

if (process.env.MakeTable) {
    // create dynamo db tables
    fs.readdirSync(dynamodbPath).forEach((file) => {
      if (path.extname(file) === '.js') require(`${dynamodbPath}/${file}`);
    });
}

require('./childProcess');