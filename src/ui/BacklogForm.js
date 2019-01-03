import React from 'react';

const BacklogForm = () => {
    return (
        <form class="form-inline">
            <div class="form-group mb-2">
                <label for="backlog_name" class="sr-only">Backlog Name</label>
                <input type="text" readonly class="form-control" id="backlog_name" placeholder="Set Backlog Name" />
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="backlog_date" class="sr-only">Backlog Date</label>
                <input type="text" class="form-control" id="backlog_date" placeholder="Set Backlog Date" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Save</button>
        </form>
    );
};

export default BacklogForm;