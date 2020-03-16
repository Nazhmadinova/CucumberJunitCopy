package APIModels;

import lombok.Data;

@Data
public class Computer {

    String model;
    int year;

    public static void main(String[] args) {
        Computer computer = new Computer();
        computer.setModel("S");
        computer.setYear(2015);
    }
}
