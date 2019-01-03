import React from 'react';

const ReleaseForm = () => {
    return (
        <form class="form-inline">
            <div class="form-group mb-2">
                <label for="staticEmail2" class="sr-only">Release Name</label>
                <input type="text" readonly class="form-control" id="staticEmail2" placeholder="Set Release Name"/>
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Set Release Date" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Save</button>
        </form>
    );
};

export default ReleaseForm;