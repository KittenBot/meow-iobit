/*
Riven
load dependency
"iobit": "file:../meow-iobit"
*/

//% color="#31C7D5" weight=10 icon="\uf1e6"
namespace iobit {

    //% blockId=_digiwrite block="DWrite|pin %pin|%value"
    //% weight=100
    export function DigiWrite(pin: DigitalInOutPin, value: boolean): void {
        pin.digitalWrite(value);
    }

    //% blockId=iobit_digiread block="DRead|pin %pin"
    //% weight=98
    export function DigiRead(pin: DigitalInOutPin): boolean {
        return pin.digitalRead();
    }

    //% blockId=iobit_analogrd block="ARead|pin %pin"
    //% weight=97
    export function AnalogRead(pin: AnalogInPin): number {
        return pin.analogRead();
    }

    //% blockId=iobit_analogwr block="AWrite|pin %pin|%value"
    //% weight=96
    export function AnalogWrite(pin: AnalogOutPin, value: number): void {
        pin.analogWrite(value);
    }

    //% blockId=iobit_servo block="Servo|pin %pin|degree %degree"
    //% weight=95
    //% degree.min=0 degree.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Servo(pin: PwmPin, degree: number): void {
        pin.servoWrite(degree);
    }

    //% blockId=iobit_pwm block="PWM|pin %pin|value %value|Period %period ms"
    //% weight=94
    export function PWM(pin: PwmPin, value: number, period: number): void {
        pin.analogSetPeriod(period);
        pin.analogWrite(value);
    }
}
