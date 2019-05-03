import { browser, element, by } from "protractor";
import { Workbook, Row, Cell, Worksheet } from 'exceljs';
import * as fs from 'fs';


export namespace GenericKeywordsPage {

}

export class GenericKeywords {
    getPageTitle(): any {
        return browser.getTitle();
    }

    clickButton(buttonName: string): void {
        element(by.buttonText(buttonName)).click();
    }

    readExcel(fileName: string) {
        let wb: Workbook = new Workbook();
        wb.xlsx.readFile(fileName).then(function () {
            let sheet: Worksheet = wb.getWorksheet("Sheet1");
            let rowObject: Row = sheet.getRow(3);
            let cellObject: Cell = rowObject.getCell(2);
            console.log(cellObject.value);
            browser.get(cellObject.toString())

        })
    }

    writeExcel(fileName: string) {
        console.log("FileName-------------->" + fileName);
        let wb: Workbook = new Workbook();
        wb.xlsx.readFile(fileName).then(function (workBook) {
            let sheet: Worksheet = workBook.getWorksheet("Sheet1");
            let rowCount: number = sheet.actualRowCount;

            console.log("Rowcount---->" + rowCount.toString);
        }).catch(function (error) {
            console.log("Error to read file: ", error);
        })
    }


    waitTillFileExist(fileName: string, timeOut: number) {
        fs.exists(fileName, function (exists) {
            if (exists) {
                console.log("FileName Exists-------------->" + fileName);

                var workbook = new Workbook();
                workbook.xlsx.readFile(fileName).then(function () {
                    var worksheet = workbook.getWorksheet("Sheet1");
                    worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
                        console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
                    });
                });
            }
            else {
                console.log("File not exist");
                setTimeout(function () {
                    var workbook = new Workbook();
                    workbook.xlsx.readFile(fileName).then(function () {
                        var worksheet = workbook.getWorksheet("Sheet1");
                        worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
                            console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
                        });
                    });
                }, timeOut)
            }
        });

    }

}