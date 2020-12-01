import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import columnDefs from "./columnDefs";
import rowData from "./rowData";

const App = ({
                 width = '100%',
                 height = '48vh',
                 gridName,
                 onMountCallback,
                 onUnmountCallback,
                 showLoader = false,
                 maxRowsToShowWithoutScroll,
                 suppressColumnVirtualisation
               }: any) => {
  useEffect(() => {
    if (onMountCallback) onMountCallback();
    if (onUnmountCallback) return onUnmountCallback;
    return undefined;
  }, []);
  const getRowHeight = () => 50;
  const getTableHeight = () => {
    if (maxRowsToShowWithoutScroll) {
      const bufferHeight = 2;
      const headerHeight = getRowHeight();
      return headerHeight + (maxRowsToShowWithoutScroll * getRowHeight()) + bufferHeight;
    }
    return height;
  };
  const onGridReady = (params: any) => {
    params.api.sizeColumnsToFit();
    window.onresize = () => {
      params.api.sizeColumnsToFit();
    };
    const checkbox = document.querySelector('.tooltip-wrapper-checkbox');
    checkbox?.addEventListener('change', () => params.api.sizeColumnsToFit());
    const headerTabs = document.querySelectorAll('.nav-sub-header__link');
    for (const headerTab of headerTabs as any) {
      headerTab.addEventListener('click', () => params.api.sizeColumnsToFit());
    }
  };

  return (
        <div className={classNames(
            'ag-grid-table-wrapper',
            { 'ag-grid-table-loader': showLoader }
        )}
        >
          <div
              id="myGrid"
              className="ag-theme-alpine ag-grid-custom-styles"
              style={{
                height: getTableHeight(),
                width: '100%',
                marginLeft: 20,
                marginTop: 25
              }}
          >
            <AgGridReact
                getRowHeight={getRowHeight}
                onGridReady={onGridReady}
                suppressRowClickSelection
                suppressRowTransform
                rowSelection="multiple"
                columnDefs={columnDefs}
                rowData={rowData}
                modules={[
                  ClientSideRowModelModule,
                  ClipboardModule
                ]}
                enableRangeSelection
                suppressColumnVirtualisation={suppressColumnVirtualisation}
            />
          </div>
        </div>
  );
};

export default App;
