import { ColumnDirective, ColumnsDirective, GridComponent ,GroupSettingsModel,Group, RowDragEventArgs,SelectionSettingsModel, RowDropSettingsModel, Selection, RowDD} from '@syncfusion/ej2-react-grids';
import {Inject} from '@syncfusion/ej2-react-grids';
import { data } from '../data';
import { render } from 'react-dom';
import afterFrame from 'afterframe';
import { measureInteraction } from '../Utils';
import '../assets/ej2.css';

function Ej2Grid() {
    
    let grid: Grid | null;
    let themes: string[]=['material','fabric','bootstrap'];
    const selectOptions: SelectionSettingsModel = { type: 'Multiple' };
    const rowDropOptions: RowDropSettingsModel = { targetID: 'Grid' };
    const rowDrop = (args: RowDragEventArgs): void => {
      args.cancel = true;
      let value = [];
      for (let r = 0; r < args.rows.length; r++) {
        value.push(args.fromIndex + r);
      }
      grid.reorderRows(value, args.dropIndex);
    }

    const interaction = measureInteraction();
    const groupSettings: GroupSettingsModel = { columns: ['Name'] };
    afterFrame(() => {
        interaction.end();
    });

    return <GridComponent dataSource={data}  allowGrouping={true} groupSettings={ groupSettings }  
    ref={g => grid = g} allowRowDragAndDrop={true} rowDrop={rowDrop} selectionSettings={selectOptions} rowDropSettings={rowDropOptions}
    >
        <ColumnsDirective>
            <ColumnDirective field='Name' width='50' textAlign="Left"/>
            <ColumnDirective field='samplesEn' width='50' textAlign="Left" />
            <ColumnDirective field='samplesTr' width='50' textAlign="Left" />
            <ColumnDirective field='developerNote' width='50' textAlign="Left" />
            <ColumnDirective field='architectNote' width='50' textAlign="Left" />
            <ColumnDirective field='returnType' width='50' textAlign="Left" />
            <ColumnDirective field='isDeprecated' width='50' textAlign="Left" />
            <ColumnDirective field='isLost' width='50' textAlign="Left" />
        </ColumnsDirective>
        <Inject services={[Group,RowDD, Selection]} />
    </GridComponent>
};
export default Ej2Grid;
