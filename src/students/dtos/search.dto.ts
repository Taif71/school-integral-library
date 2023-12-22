import { SearchQueryDTO } from '../../common/dto';

export class SearchStudentDTO
    extends SearchQueryDTO
    implements Readonly<SearchStudentDTO> { }
