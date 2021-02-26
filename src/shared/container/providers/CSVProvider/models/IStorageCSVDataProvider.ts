interface IDataCSV {
    name: string;
    cpf: string;
    rg: string;
    id: string;
    email: string;
    IP: string;
    birth_date: Date;
}

export default interface IStorageCSVDataProvider {
    saveFile({ IP, birth_date, cpf, email, id, name, rg }: IDataCSV): Promise<void>;
}