// import fs from 'fs';
// import path from 'path';
// import uploadConfig from '@shared/config/upload';
import IStorageCSVDataProvider from '../models/IStorageCSVDataProvider';
import ObjectsToCsv from 'objects-to-csv';
import crypto from 'crypto';



interface IDataCSV {
    name: string;
    cpf: string;
    rg: string;
    id: string;
    email: string;
    IP: string;
    birth_date: Date;
}


class DiskStorageCSVProvider implements IStorageCSVDataProvider {
    public async saveFile({ IP, birth_date, cpf, email, id, name, rg }: IDataCSV): Promise<void> {
        const data = [{ IP, birth_date, cpf, email, id, name, rg }];
        const csv = new ObjectsToCsv(data);
        console.log(csv);
        const fileHash = crypto.randomBytes(10).toString('HEX');

        // Save to file:
        await csv.toDisk(`./${fileHash}test.csv`);

        console.log(`${fileHash}test.csv`);
        // Return the CSV file as string:
        // console.log(await csv.toString());

    }
}

export default DiskStorageCSVProvider;
