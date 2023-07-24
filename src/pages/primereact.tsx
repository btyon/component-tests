//https://primereact.org/datatable/
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { data } from '../data';
import afterFrame from 'afterframe';
import { measureInteraction } from '../Utils';


function PrimeReact() {
    const interaction = measureInteraction();

    afterFrame(() => {
        interaction.end();
      });
      
    // const [products, setProducts] = useState<Product[]>([]);

    // useEffect(() => {
    //     ProductService.getProductsMini().then(data => setProducts(data));
    // }, []);
    return (
        <div className="card">
            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
            </DataTable>
        </div>
    );
};
export default PrimeReact;
