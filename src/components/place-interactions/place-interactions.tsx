import { Dispatch, SetStateAction, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { GridApi, GridReadyEvent, ValueFormatterParams } from 'ag-grid-community';
import { address } from '../../conf/server';
import { Button } from '@material-ui/core';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './place-interactions.css';

const PlaceInteractions = (): JSX.Element => {
    const [, setGridApi] = useState(null as unknown as GridApi);
    const [rowData, setRowData] = useState([]);
    const [startDate, setStartDate] = useState(new Date(2018, 08, 09));
    const [endDate, setEndDate] = useState(new Date());

    const onGridReady = (params: GridReadyEvent) => {
        setGridApi(params.api);
        params.api.sizeColumnsToFit();
    };

    const getDateChangeHandler = (dateSetter: Dispatch<SetStateAction<Date>>) => {
        return (date: MaterialUiPickersDate) => {
            if (date) {
                dateSetter(date);
            }
        }
    }

    const onSearchClick = () => {
        const url = new URL('/place_interactions', address);
        const params = {
            start_tis: startDate.toISOString(),
            end_tis: endDate.toISOString(),
        };
        url.search = new URLSearchParams(params).toString();
        const fetchData = async (url: URL) => {
            const response = await fetch(url.href);
            const data = await response.json();
            setRowData(data);
        };
        fetchData(url);
    }

    const timestampFormatter = (params: ValueFormatterParams) => {
        const { value } = params;
        return value ? new Date(value).toLocaleString() : '';
    }

    const locationFormatter = (params: ValueFormatterParams) => {
        const { value } = params;
        const empty = '';
        if (!value || typeof value !== 'string') {
            return empty;
        }
        const matchArray = value.match(/SRID=4326;POINT\((?<longitude>.*) (?<latitude>.*)\)/);
        if (!matchArray?.groups) {
            return empty;
        }
        return `${matchArray.groups.latitude} ${matchArray.groups.longitude}`;

    }

    return (
        <div className="place-interactions">
            <h1>Place Interactions</h1>
            <div className="inputs">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        label="Start Date"
                        value={startDate}
                        onChange={getDateChangeHandler(setStartDate)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="End Date"
                        value={endDate}
                        onChange={getDateChangeHandler(setEndDate)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <Button variant="contained" color="primary" onClick={onSearchClick}>
                    Search
                </Button>
            </div>
            <div className="ag-theme-alpine grid-container" style={{ width: '100%', height: '100%' }}>
                <AgGridReact
                    rowData={rowData}
                    onGridReady={onGridReady}>
                    <AgGridColumn headerName="License no." field="license" />
                    <AgGridColumn headerName="Time" field="ts" valueFormatter={timestampFormatter} />
                    <AgGridColumn headerName="Coordinates" field="ewkt" valueFormatter={locationFormatter} />
                </AgGridReact>
            </div>
        </div>
    );
};

export default PlaceInteractions;