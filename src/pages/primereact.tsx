//https://primereact.org/datatable/
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data } from '../data';
import afterFrame from 'afterframe';
import { measureInteraction } from '../Utils';
import '../assets/prime.css';

function PrimeReact() {
    const interaction = measureInteraction();

    afterFrame(() => {
        interaction.end();
    });

    return (
        <div className="card">
            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name"            header="Name"></Column>
                <Column field="samplesTr"       header="SamplesTr"></Column>
                <Column field="developerNote"   header="Developer Note"></Column>
                <Column field="architectNote"   header="Architect Note"></Column>
                <Column field="returnType"      header="Return Type"></Column>
                <Column field="isDeprecated"    header="Is Deprecated"></Column>
                <Column field="isLost"          header="is Lost" headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' ,margin:'100px',backgroundColor:'blue'}}></Column>
            </DataTable>
        </div>
    );
};
export default PrimeReact;
