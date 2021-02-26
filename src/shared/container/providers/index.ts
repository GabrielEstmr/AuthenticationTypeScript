import { container } from 'tsyringe';

import IStorageProvider from './CSVProvider/models/IStorageCSVDataProvider';
import DiskStorageProvider from './CSVProvider/implementations/DiskStorageProvider';



container.registerSingleton<IStorageProvider>(
    'DiskStorageProvider',
    DiskStorageProvider,

);


