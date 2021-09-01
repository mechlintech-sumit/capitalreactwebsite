import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Data from "../Data.json";
import { useQuery, gql } from "@apollo/client";
import { LOAD_COUNTRY } from "../GraphQL/Queries";
import "../App.css";

const SearchAutocomplete = () => {
  const [code, setCode] = useState("");
  const { error, loading, data } = useQuery(LOAD_COUNTRY, {
    variables: { Code: code },
  });
  const [myOptions, setMyOptions] = useState([]);
  const [name, setName] = useState("");
  const [search, setSerarch] = useState("");

  //  if (loading) return <h2>Lodaing</h2>;
  //   if (error) return `Error! ${error}`

  console.log("code", code, search);
  console.log("useQuery", data);

  const getData = (event, value) => {
    console.log(value);
    if (event.target.value.length >= 3) {
      setSerarch(event.target.value.length);
      setMyOptions(myOptions);
    }
  };

  const onTagsChange = (event, values) => {
    if (values) {
      setCode(values.code);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="heading"> Country Name</h1>
        <div style={{ marginLeft: "23%", marginTop: "60px" }}>
          <Autocomplete
            style={{ width: 500 }}
            freeSolo
            autoComplete
            autoHighlight
            options={search >= 3 ? Data : []}
            onChange={onTagsChange}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                value={name}
                defaultValue="The Godfather"
                onChange={(event) => getData(event)}
                variant="outlined"
                label="Search Box"
              />
            )}
          />
        </div>
        <div style={{marginLeft:"20%",marginTop:"30px"}}>
          {loading ? <h1>Loading ...</h1> : <> {
            data.country != null ? <>
           
              <div className="output">
                <h2>Country </h2>
                <span className="result"></span>
                <h2 style={{ marginLeft: "10px" }}>
                  {data == undefined ? null : data.country.name}{" "}
                </h2>
                <span></span>
              </div>
              <div className="output">
                <h2>Capital </h2>
                <span className="result"></span>
                <h2 style={{ marginLeft: "10px" }}>
                  {data == undefined ? null : data.country.capital}{" "}
                </h2>
                <span></span>
              </div>
              <div className="output">
                <h2>Currency </h2>
                <span className="result"></span>
                <h2 style={{ marginLeft: "10px" }}>
                  {data == undefined ? null : data.country.currency}{" "}
                </h2>
                <span></span>
              </div>
              <div className="output">
                <h2>List of Languages </h2>
                <span className="result"></span>
                <h2 style={{ marginLeft: "10px" }}>
                  {data == undefined
                    ? null
                    : data.country.languages.map((lan) => {
                      return <h5>{lan.name}</h5>;
                    })}{" "}
                </h2>
                <span></span>
              </div></> : null
          }
          
          </>
        }
        </div>
      </div>
    </>
  );
};

export default SearchAutocomplete;
