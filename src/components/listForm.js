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
                <label for="id">Id :</label>
                <input type="text" class="form-control" id="id" placeholder="Enter id" name="id"/>
                <br/>
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name"/>
                <br/>
                <label for="age">Age:</label>
                <input type="text" class="form-control" id="age" placeholder="Enter Age" name="age"/>
                <br/>
                <label for="dept">Dept:</label>
                <input type="text" class="form-control" id="dept" placeholder="Enter Dept" name="dept"/>
                <br/>
                <label for="description">Description:</label>
                <input type="text" class="form-control" id="description" placeholder="Enter Description" name="description"/>
                <br/>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>     
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
