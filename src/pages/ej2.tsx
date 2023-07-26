import { ColumnDirective, ColumnsDirective, GridComponent ,GroupSettingsModel,Group} from '@syncfusion/ej2-react-grids';
import {Inject} from '@syncfusion/ej2-react-grids';
import { data } from '../data';
import afterFrame from 'afterframe';
import { measureInteraction } from '../Utils';

function Ej2Grid() {

    const interaction = measureInteraction();
    const groupSettings: GroupSettingsModel = { columns: ['Name'] };
    afterFrame(() => {
        interaction.end();
    });

    return <GridComponent dataSource={data}  allowGrouping={true} groupSettings={ groupSettings }   >
        <ColumnsDirective>
            <ColumnDirective field='Name' width='50' textAlign="Left" />
            <ColumnDirective field='samplesEn' width='50' textAlign="Left" />
            <ColumnDirective field='samplesTr' width='50' textAlign="Left" />
            <ColumnDirective field='developerNote' width='50' textAlign="Left" />
            <ColumnDirective field='architectNote' width='50' textAlign="Left" />
            <ColumnDirective field='returnType' width='50' textAlign="Left" />
            <ColumnDirective field='isDeprecated' width='50' textAlign="Left" />
            <ColumnDirective field='isLost' width='50' textAlign="Left" />
        </ColumnsDirective>
        <Inject services={[Group]} />
    </GridComponent>
};
export default Ej2Grid;

