import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1614267572709 implements MigrationInterface {

    //O que fazer de novo  >> isNullable campo obrigatório
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'rg',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'birth_date',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    //O que desfazer
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
