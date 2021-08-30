let http = require("http");
let url = require("url");
let port = 4200;
let taskPlanner = `
    <h1>Task Planner</h1>
    <h4>Add Task</h4>
    <form action="/addTask" method="get">
        <label>Emp Id: </label>
        <input type="text" name="empId"/><br/>
        <label>Task Id: </label>
        <input type="text" name="taskId"/><br/>
        <label>Task: </label>
        <input type="text" name="task"/><br/>
        <label>Deadline: </label>
        <input type="date" name="endDate"/><br/>
        <input type="submit" value="Add Task"/>
    </form>
    <h4>Delete Task</h4>
    <form action="/deletTask" method="get">
        <label>Task Id: </label>
        <input type="text" name="taskId"/><br/>
        <input type="submit" value="Delete Task"/>
    </form>
    <h4>List Task</h4>
    <form action="/listTask" method="get">
        <input type="submit" value="List Task"/>
    </form>
`
let server = http.createServer((req, res) => {
    var pathInfo = url.parse(req.url, true).pathname;
    if (req.url == "/") {
        res.setHeader("content-type", "text/html");
        res.end(taskPlanner);
    } else if (pathInfo == "/addTask") {
        var data = url.parse(req.url, true).query;
        let fs = require("fs");

        let task = new Array();

        let task1 = {
            "id": data.taskId,
            "empId": data.empId,
            "task": data.task,
            "deadLine": data.endDate
        };

        let file = 'task.json';

        fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
            if (err) {
                task.push(task1);
                let jsonData = JSON.stringify(task);
                fs.writeFileSync(file, jsonData);
                console.log('file written');
            } else {
                let data = fs.readFileSync(file);
                var json = JSON.parse(data);
                task.push(json);
                json.push(task1);
                let jsonData = JSON.stringify(json);
                fs.writeFileSync(file, jsonData);
                console.log('file appended');
            }
        });
        res.end(taskPlanner);

    } else if (pathInfo == "/deletTask") {

        var data1 = url.parse(req.url, true).query;
        let task = new Array();
        let fs = require("fs");
        let file = 'task.json';
        let tasks = fs.readFileSync(file);
        var json = JSON.parse(tasks);

        for (var i in json) {
            if (json[i].id != data1.taskId) {
                task.push(json[i]);
            }
        }

        let jsonData = JSON.stringify(task);
        fs.writeFileSync(file, jsonData);
        console.log("In delete task");
        res.end(taskPlanner);

    } else if (pathInfo == "/listTask") {

        let fs = require("fs");
        let file = 'task.json';
        let tasks = fs.readFileSync(file);
        var data = JSON.parse(tasks);  
        let taskTable = `
        <table>
                <tr>
                    <th>Employee Id</th>
                    <th>Task Id</th>
                    <th>Task</th>
                    <th>Deadline</th>
                </tr>
           `
        buildTable(data)
        function buildTable(data){
		for (var i = 0; i < data.length; i++){
            var row = `<tr>
            <td>${data[i].empId}</td>
            <td>${data[i].id}</td>
            <td>${data[i].task}</td>
            <td>${data[i].deadLine}</td>
					  </tr>`
            taskTable += row

            }
		}
        console.log("In list task");
        res.end(taskPlanner + taskTable + '</table >');

    }
})
server.listen(port, () => console.log(`running on port num ${port}`));
