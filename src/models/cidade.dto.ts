import { EstadoDTO } from 'src/models/estado.dto';
export interface CidadeDTO {
    id: string;
    nome: string;
    estado?: EstadoDTO;
}
