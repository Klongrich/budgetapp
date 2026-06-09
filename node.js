const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { writeFile } = require('node:fs').promises;
const { appendFile } = require('node:fs').promises;

const app = express();

async function writeData() {
  try {
    const data = 'Hello, this is a secure text file!';
    
    // Writes file. Replaces the file completely if it already exists.
    await writeFile('output.txt', data, 'utf-8');
    console.log('File written successfully!');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

async function appendText(data) {
  await appendFile('log.csv', data, 'utf-8');
  console.log('Text appended!');
}

app.get('/api/data', async (req, res) => { 

	const ID = req.query.ID;
	const Location = req.query.loc;
	const Amount = req.query.amount;
	const Item = req.query.item;

	await appendText(ID + ",");
	await appendText(Location + ",");
	await appendText(Amount + ",");
	await appendText(Item);
	await appendText("\n");

	console.log(ID + " " + Location + " " + Amount + " " + Item);
});

app.listen(3022, () =>
  console.log('Express server is running on localhost:3022')
);
