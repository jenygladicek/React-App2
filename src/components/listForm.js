import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="container">
            <form>
                <label htmlFor="id">Id :</label>
                <input type="text" className="form-control" id="id" placeholder="Enter id" name="id"/>
                <br/>
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"/>
                <br/>
                <label htmlFor="age">Age:</label>
                <input type="text" className="form-control" id="age" placeholder="Enter Age" name="age"/>
                <br/>
                <label htmlFor="dept">Dept:</label>
                <input type="text" className="form-control" id="dept" placeholder="Enter Dept" name="dept"/>
                <br/>
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" id="description" placeholder="Enter Description" name="description"/>
                <br/>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>     
            </div>
        );
    }
}


export default connect()(ListForm);
