import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { data } from '../data';

function Ej2Grid() {
    return <GridComponent dataSource={data}>
        <ColumnsDirective>
            <ColumnDirective field='Name' width='100' textAlign="Left"/>
        </ColumnsDirective>
    </GridComponent>
};
export default Ej2Grid;