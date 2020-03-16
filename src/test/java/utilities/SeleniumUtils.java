package utilities;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.AfterClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class SeleniumUtils {

    public static List<String> getAllSelectOptions(WebElement element){
        Select select = new Select(element);
        List<String> options = new ArrayList<>();

        for (WebElement eachOption: select.getOptions()){
            options.add(eachOption.getText());
        }

        return options;
    }

    public static void waitForVisibility(WebElement element, int seconds) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), seconds);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public static void pauseWithTreadSleep(int seconds){
        try {
            Thread.sleep(seconds * 1000);
        }catch (InterruptedException e){
            e.printStackTrace();
        }
    }

    public static void explicitWaitForInvisibility(WebElement element, int seconds){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), seconds);
        wait.until(ExpectedConditions.invisibilityOf(element));

    }

    public static XSSFCell getCell(String path, String sheetName, int row, int givenCell) throws IOException {

        FileInputStream fileInputStream = new FileInputStream(path);
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheet(sheetName);
        XSSFCell cell = sheet.getRow(row).getCell(givenCell);

        workbook.close();
        fileInputStream.close();
        return cell;

    }

    public static void setCell(String path, String sheetName, int row, int givenCell, String value)throws IOException{

        FileInputStream fileInputStream = new FileInputStream(path);
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheet(sheetName);
        XSSFRow row2 = sheet.getRow(row);
        if(row2 == null){
            row2.createCell(givenCell);
        }
        row2.createCell(givenCell).setCellValue(value);

        FileOutputStream fileOutputStream = new FileOutputStream(path);
        workbook.write(fileOutputStream);
        fileInputStream.close();
        fileOutputStream.close();
        workbook.close();

    }

}
