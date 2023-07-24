import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { data } from '../data';
import afterFrame from 'afterframe';
import { measureInteraction } from '../Utils';

function Ej2Grid() {
    
    const interaction = measureInteraction();

    afterFrame(() => {
        interaction.end();
      });
      
    return <GridComponent dataSource={data} >
        <ColumnsDirective>
            <ColumnDirective field='Name' width='100' textAlign="Left"/>
        </ColumnsDirective>
    </GridComponent>
};
export default Ej2Grid;