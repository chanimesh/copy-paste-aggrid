import DummyComponent from "./DummyComponent";

const columnDefs = [{
    headerName: 'Test Cell 1',
    editable:true,
    field: 'testCell1',
    minWidth: 135,
    width: 145,
    suppressMovable: true,
    cellClass: 'cellclasstest',
    pinned: 'left',
    suppressSizeToFit: true,
},
    {
        headerName: 'Test Cell 2',
        field: 'testCell2',
        editable:true,
        minWidth: 135,
        width: 145,
        suppressMovable: true,
        cellClass: 'cellClassTest',
        pinned: 'left',
        suppressSizeToFit: true,
    },
    {
        headerName: 'Test Header with component',
        field: 'testCellWithComponent',
        suppressMovable: true,
        minWidth: 135,
        width: 145,
        pinned: 'left',
        suppressSizeToFit: true,
        cellClass: 'test-class',
        cellRendererFramework: DummyComponent,
    }
];

export default columnDefs;
