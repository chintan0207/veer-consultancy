import express from "express";
import fs from "fs"
import path from 'path'
import { fileURLToPath } from 'url';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../../Assets')));

app.get('/api/service-details', (req, res) => {
    const filePath = path.join(__dirname, '../../data.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const jsonData = JSON.parse(data);

        const updatedJson = jsonData?.map(item => {
            if (item.icon) {
                item.icon = 'http://' + req.get('host') + item.icon
                
            }
            item.country = item.country?.map(product => {
                if (product.img) {
                    product.img = 'http://' + req.get('host') + product.img
                }
                return product
            }
            )
            return item
        })

        return res.json(updatedJson);
    })
})

export default app