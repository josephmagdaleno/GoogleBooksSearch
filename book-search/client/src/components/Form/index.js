import React from "react";

function Form(props) {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="search"><h2>Search for a book.</h2></label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a book here"
                        id="search"
                    />
                    <button onClick={props.handleFormSubmit} className="btn">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}


export default Form;