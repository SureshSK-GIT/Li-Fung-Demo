"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
const fs = require("fs");
class GenericKeywords {
    getPageTitle() {
        return protractor_1.browser.getTitle();
    }
    clickButton(buttonName) {
        protractor_1.element(protractor_1.by.buttonText(buttonName)).click();
    }
    readExcel(fileName) {
        let wb = new exceljs_1.Workbook();
        wb.xlsx.readFile(fileName).then(function () {
            let sheet = wb.getWorksheet("Sheet1");
            let rowObject = sheet.getRow(3);
            let cellObject = rowObject.getCell(2);
            console.log(cellObject.value);
            protractor_1.browser.get(cellObject.toString());
        });
    }
    writeExcel(fileName) {
        console.log("FileName-------------->" + fileName);
        let wb = new exceljs_1.Workbook();
        wb.xlsx.readFile(fileName).then(function (workBook) {
            let sheet = workBook.getWorksheet("Sheet1");
            let rowCount = sheet.actualRowCount;
            console.log("Rowcount---->" + rowCount.toString);
        }).catch(function (error) {
            console.log("Error to read file: ", error);
        });
    }
    readFile(fileName) {
        var workbook = new exceljs_1.Workbook();
        workbook.xlsx.readFile(fileName).then(function () {
            var worksheet = workbook.getWorksheet("Sheet1");
            worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
                console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
            });
        });
    }
    waitTillFileExist(fileName, timeOut) {
        fs.exists(fileName, function (exists) {
            if (exists) {
                console.log("FileName Exists-------------->" + fileName);
                this.readFile(fileName);
            }
            else {
                console.log("File not exist");
                setTimeout(function () {
                    this.readFile(fileName);
                }, timeOut);
            }
        });
    }
}
exports.GenericKeywords = GenericKeywords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY19LZXl3b3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL19fdGVzdF9fL2hlbHBlci9HZW5lcmljX0tleXdvcmRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBQ2xELHFDQUF5RDtBQUN6RCx5QkFBeUI7QUFPekIsTUFBYSxlQUFlO0lBQ3hCLFlBQVk7UUFDUixPQUFPLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxVQUFrQjtRQUMxQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQWdCO1FBQ3RCLElBQUksRUFBRSxHQUFhLElBQUksa0JBQVEsRUFBRSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLEtBQUssR0FBYyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pELElBQUksU0FBUyxHQUFRLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxVQUFVLEdBQVMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUV0QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxVQUFVLENBQUMsUUFBZ0I7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLEVBQUUsR0FBYSxJQUFJLGtCQUFRLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO1lBQzlDLElBQUksS0FBSyxHQUFjLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkQsSUFBSSxRQUFRLEdBQVcsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUU1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQjtRQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLGtCQUFRLEVBQUUsQ0FBQztRQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLFNBQVM7Z0JBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6RSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUdELGlCQUFpQixDQUFDLFFBQWdCLEVBQUUsT0FBZTtRQUMvQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxVQUFVLE1BQU07WUFDaEMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFFekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMzQjtpQkFDSTtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzlCLFVBQVUsQ0FBQztvQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUU1QixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUE7YUFDZDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBL0RELDBDQStEQyJ9