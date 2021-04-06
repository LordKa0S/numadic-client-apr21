import DateFnsUtils from "@date-io/date-fns";
import { Button, TextField } from "@material-ui/core";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ChangeEvent, createRef, Dispatch, SetStateAction, useEffect, useState } from "react";
import { MapContainer, Marker, Polyline, TileLayer, useMap } from "react-leaflet";
import { address } from "../../conf/server";
import { LatLngTuple } from "leaflet";

import './vehicle-activity.css';

const MapChildren = (props: { path: LatLngTuple[] }) => {
    const map = useMap();
    const lineRef = createRef<any>();
    useEffect(() => {
        if (Object.keys(lineRef.current?._bounds).length > 0) {
            map.flyToBounds(lineRef.current._bounds);
        }
    }, [lineRef, map, props.path]);
    return (
        <>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                (() => {
                    if (props.path.length > 0) {
                        const [start] = props.path;
                        return <Marker position={start}>
                        </Marker>;
                    }
                })()
            }
            {
                (() => {
                    if (props.path.length > 1) {
                        const end = props.path[props.path.length - 1];
                        return <Marker position={end}>
                        </Marker>;
                    }
                })()
            }
            <Polyline ref={lineRef} positions={props.path} />
        </>
    );
}

const VehicleActivity = () => {
    const [license, setLicense] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [path, setPath] = useState([] as LatLngTuple[]);

    const getDateChangeHandler = (dateSetter: Dispatch<SetStateAction<Date>>) => {
        return (date: MaterialUiPickersDate) => {
            if (date) {
                dateSetter(date);
            }
        }
    }

    const handleLicenseChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setLicense(value);
    }

    const onSearchClick = () => {
        const url = new URL('/vehicle_activity', address);
        const params = {
            license,
            start_tis: startDate.toISOString(),
            end_tis: endDate.toISOString(),
        };
        url.search = new URLSearchParams(params).toString();
        type VehicleActivityData = {
            ewkt: string,
            ts: string,
        }
        const fetchData = async (url: URL) => {
            const response = await fetch(url.href);
            const data: VehicleActivityData[] = await response.json();
            const geom = data.map((item) => {
                const matchArray = item.ewkt.match(/SRID=4326;POINT\((?<longitude>.*) (?<latitude>.*)\)/);
                if (!matchArray?.groups) {
                    return null;
                }
                return [parseFloat(matchArray.groups.latitude), parseFloat(matchArray.groups.longitude)] as LatLngTuple;
            }).filter(item => item !== null) as LatLngTuple[];
            setPath(geom);
        };
        fetchData(url);
    }

    return (
        <div className="vehicle-activity">
            <h1>Vehicle Activity</h1>
            <div className="inputs">
                <TextField label="License No." value={license} onChange={handleLicenseChange} />
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
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%' }}>
                <MapChildren path={path}></MapChildren>
            </MapContainer>
        </div>
    );
}

export default VehicleActivity;