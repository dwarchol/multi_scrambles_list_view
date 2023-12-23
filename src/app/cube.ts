export class Cube {
    state = {
        U: {
            center: "w",
            UBL: "w",
            UB: "w",
            UBR: "w",
            UR: "w",
            UFR: "w",
            UF: "w",
            UFL: "w",
            UL: "w",
        },
        F: {
            center: "g",
            FUL: "g",
            FU: "g",
            FUR: "g",
            FR: "g",
            FDR: "g",
            FD: "g",
            FDL: "g",
            FL: "g",
        },
        R: {
            center: "r",
            RUF: "r",
            RU: "r",
            RUB: "r",
            RB: "r",
            RDB: "r",
            RD: "r",
            RDF: "r",
            RF: "r",
        },
        B: {
            center: "b",
            BUR: "b",
            BU: "b",
            BUL: "b",
            BL: "b",
            BDL: "b",
            BD: "b",
            BDR: "b",
            BR: "b",
        },
        L: {
            center: "o",
            LUB: "o",
            LU: "o",
            LUF: "o",
            LF: "o",
            LDF: "o",
            LD: "o",
            LDB: "o",
            LB: "o",
        },
        D: {
            center: "y",
            DFL: "y",
            DF: "y",
            DFR: "y",
            DR: "y",
            DBR: "y",
            DB: "y",
            DBL: "y",
            DL: "y",
        }
    }

    cycle3(a: string, b: string, c: string, d: string) {
        return [b, c, d, a]
    }
    cycle2(a: string, b: string, c: string, d: string) {
        return [c, d, a, b]
    }
    cycle1(a: string, b: string, c: string, d: string) {
        return [d, a, b, c]
    }

    moveR() {
        [this.state.R.RUF, this.state.R.RUB, this.state.R.RDB, this.state.R.RDF] = this.cycle1(this.state.R.RUF, this.state.R.RUB, this.state.R.RDB, this.state.R.RDF);
        [this.state.R.RU, this.state.R.RB, this.state.R.RD, this.state.R.RF] = this.cycle1(this.state.R.RU, this.state.R.RB, this.state.R.RD, this.state.R.RF);

        [this.state.U.UR, this.state.B.BR, this.state.D.DR, this.state.F.FR] = this.cycle1(this.state.U.UR, this.state.B.BR, this.state.D.DR, this.state.F.FR);
        [this.state.U.UBR, this.state.B.BDR, this.state.D.DFR, this.state.F.FUR] = this.cycle1(this.state.U.UBR, this.state.B.BDR, this.state.D.DFR, this.state.F.FUR);
        [this.state.U.UFR, this.state.B.BUR, this.state.D.DBR, this.state.F.FDR] = this.cycle1(this.state.U.UFR, this.state.B.BUR, this.state.D.DBR, this.state.F.FDR);
    }
    moveR2() {
        [this.state.R.RUF, this.state.R.RUB, this.state.R.RDB, this.state.R.RDF] = this.cycle2(this.state.R.RUF, this.state.R.RUB, this.state.R.RDB, this.state.R.RDF);
        [this.state.R.RU, this.state.R.RB, this.state.R.RD, this.state.R.RF] = this.cycle2(this.state.R.RU, this.state.R.RB, this.state.R.RD, this.state.R.RF);

        [this.state.U.UR, this.state.B.BR, this.state.D.DR, this.state.F.FR] = this.cycle2(this.state.U.UR, this.state.B.BR, this.state.D.DR, this.state.F.FR);
        [this.state.U.UBR, this.state.B.BDR, this.state.D.DFR, this.state.F.FUR] = this.cycle2(this.state.U.UBR, this.state.B.BDR, this.state.D.DFR, this.state.F.FUR);
        [this.state.U.UFR, this.state.B.BUR, this.state.D.DBR, this.state.F.FDR] = this.cycle2(this.state.U.UFR, this.state.B.BUR, this.state.D.DBR, this.state.F.FDR);
    }
    moveRp() {
        [this.state.R.RUF, this.state.R.RUB, this.state.R.RDB, this.state.R.RDF] = this.cycle3(this.state.R.RUF, this.state.R.RUB, this.state.R.RDB, this.state.R.RDF);
        [this.state.R.RU, this.state.R.RB, this.state.R.RD, this.state.R.RF] = this.cycle3(this.state.R.RU, this.state.R.RB, this.state.R.RD, this.state.R.RF);

        [this.state.U.UR, this.state.B.BR, this.state.D.DR, this.state.F.FR] = this.cycle3(this.state.U.UR, this.state.B.BR, this.state.D.DR, this.state.F.FR);
        [this.state.U.UBR, this.state.B.BDR, this.state.D.DFR, this.state.F.FUR] = this.cycle3(this.state.U.UBR, this.state.B.BDR, this.state.D.DFR, this.state.F.FUR);
        [this.state.U.UFR, this.state.B.BUR, this.state.D.DBR, this.state.F.FDR] = this.cycle3(this.state.U.UFR, this.state.B.BUR, this.state.D.DBR, this.state.F.FDR);
    }
    moveRw() {
        this.moveR();
        this.moveMp();
    }
    moveRw2() {
        this.moveR2();
        this.moveM2();
    }
    moveRwp() {
        this.moveRp();
        this.moveM();
    }
    moveU() {
        [this.state.U.UFL, this.state.U.UBL, this.state.U.UBR, this.state.U.UFR] = this.cycle1(this.state.U.UFL, this.state.U.UBL, this.state.U.UBR, this.state.U.UFR);
        [this.state.U.UF, this.state.U.UL, this.state.U.UB, this.state.U.UR] = this.cycle1(this.state.U.UF, this.state.U.UL, this.state.U.UB, this.state.U.UR);

        [this.state.F.FU, this.state.L.LU, this.state.B.BU, this.state.R.RU] = this.cycle1(this.state.F.FU, this.state.L.LU, this.state.B.BU, this.state.R.RU);
        [this.state.F.FUL, this.state.L.LUB, this.state.B.BUR, this.state.R.RUF] = this.cycle1(this.state.F.FUL, this.state.L.LUB, this.state.B.BUR, this.state.R.RUF);
        [this.state.F.FUR, this.state.L.LUF, this.state.B.BUL, this.state.R.RUB] = this.cycle1(this.state.F.FUR, this.state.L.LUF, this.state.B.BUL, this.state.R.RUB);
    }
    moveU2() {
        [this.state.U.UFL, this.state.U.UBL, this.state.U.UBR, this.state.U.UFR] = this.cycle2(this.state.U.UFL, this.state.U.UBL, this.state.U.UBR, this.state.U.UFR);
        [this.state.U.UF, this.state.U.UL, this.state.U.UB, this.state.U.UR] = this.cycle2(this.state.U.UF, this.state.U.UL, this.state.U.UB, this.state.U.UR);

        [this.state.F.FU, this.state.L.LU, this.state.B.BU, this.state.R.RU] = this.cycle2(this.state.F.FU, this.state.L.LU, this.state.B.BU, this.state.R.RU);
        [this.state.F.FUL, this.state.L.LUB, this.state.B.BUR, this.state.R.RUF] = this.cycle2(this.state.F.FUL, this.state.L.LUB, this.state.B.BUR, this.state.R.RUF);
        [this.state.F.FUR, this.state.L.LUF, this.state.B.BUL, this.state.R.RUB] = this.cycle2(this.state.F.FUR, this.state.L.LUF, this.state.B.BUL, this.state.R.RUB);
    }
    moveUp() {
        [this.state.U.UFL, this.state.U.UBL, this.state.U.UBR, this.state.U.UFR] = this.cycle3(this.state.U.UFL, this.state.U.UBL, this.state.U.UBR, this.state.U.UFR);
        [this.state.U.UF, this.state.U.UL, this.state.U.UB, this.state.U.UR] = this.cycle3(this.state.U.UF, this.state.U.UL, this.state.U.UB, this.state.U.UR);

        [this.state.F.FU, this.state.L.LU, this.state.B.BU, this.state.R.RU] = this.cycle3(this.state.F.FU, this.state.L.LU, this.state.B.BU, this.state.R.RU);
        [this.state.F.FUL, this.state.L.LUB, this.state.B.BUR, this.state.R.RUF] = this.cycle3(this.state.F.FUL, this.state.L.LUB, this.state.B.BUR, this.state.R.RUF);
        [this.state.F.FUR, this.state.L.LUF, this.state.B.BUL, this.state.R.RUB] = this.cycle3(this.state.F.FUR, this.state.L.LUF, this.state.B.BUL, this.state.R.RUB);
    }
    moveUw() {
        this.moveU();
        this.moveEp();
    }
    moveUw2() {
        this.moveU2();
        this.moveE2();
    }
    moveUwp() {
        this.moveUp();
        this.moveE();
    }
    moveF() {
        [this.state.F.FUL, this.state.F.FUR, this.state.F.FDR, this.state.F.FDL] = this.cycle1(this.state.F.FUL, this.state.F.FUR, this.state.F.FDR, this.state.F.FDL);
        [this.state.F.FU, this.state.F.FR, this.state.F.FD, this.state.F.FL] = this.cycle1(this.state.F.FU, this.state.F.FR, this.state.F.FD, this.state.F.FL);

        [this.state.U.UF, this.state.R.RF, this.state.D.DF, this.state.L.LF] = this.cycle1(this.state.U.UF, this.state.R.RF, this.state.D.DF, this.state.L.LF);
        [this.state.U.UFR, this.state.R.RDF, this.state.D.DFL, this.state.L.LUF] = this.cycle1(this.state.U.UFR, this.state.R.RDF, this.state.D.DFL, this.state.L.LUF);
        [this.state.U.UFL, this.state.R.RUF, this.state.D.DFR, this.state.L.LDF] = this.cycle1(this.state.U.UFL, this.state.R.RUF, this.state.D.DFR, this.state.L.LDF);
    }
    moveF2() {
        [this.state.F.FUL, this.state.F.FUR, this.state.F.FDR, this.state.F.FDL] = this.cycle2(this.state.F.FUL, this.state.F.FUR, this.state.F.FDR, this.state.F.FDL);
        [this.state.F.FU, this.state.F.FR, this.state.F.FD, this.state.F.FL] = this.cycle2(this.state.F.FU, this.state.F.FR, this.state.F.FD, this.state.F.FL);

        [this.state.U.UF, this.state.R.RF, this.state.D.DF, this.state.L.LF] = this.cycle2(this.state.U.UF, this.state.R.RF, this.state.D.DF, this.state.L.LF);
        [this.state.U.UFR, this.state.R.RDF, this.state.D.DFL, this.state.L.LUF] = this.cycle2(this.state.U.UFR, this.state.R.RDF, this.state.D.DFL, this.state.L.LUF);
        [this.state.U.UFL, this.state.R.RUF, this.state.D.DFR, this.state.L.LDF] = this.cycle2(this.state.U.UFL, this.state.R.RUF, this.state.D.DFR, this.state.L.LDF);
    }
    moveFp() {
        [this.state.F.FUL, this.state.F.FUR, this.state.F.FDR, this.state.F.FDL] = this.cycle3(this.state.F.FUL, this.state.F.FUR, this.state.F.FDR, this.state.F.FDL);
        [this.state.F.FU, this.state.F.FR, this.state.F.FD, this.state.F.FL] = this.cycle3(this.state.F.FU, this.state.F.FR, this.state.F.FD, this.state.F.FL);

        [this.state.U.UF, this.state.R.RF, this.state.D.DF, this.state.L.LF] = this.cycle3(this.state.U.UF, this.state.R.RF, this.state.D.DF, this.state.L.LF);
        [this.state.U.UFR, this.state.R.RDF, this.state.D.DFL, this.state.L.LUF] = this.cycle3(this.state.U.UFR, this.state.R.RDF, this.state.D.DFL, this.state.L.LUF);
        [this.state.U.UFL, this.state.R.RUF, this.state.D.DFR, this.state.L.LDF] = this.cycle3(this.state.U.UFL, this.state.R.RUF, this.state.D.DFR, this.state.L.LDF);
    }
    moveFw() {
        this.moveF();
        this.moveS();
    }
    moveFw2() {
        this.moveF2();
        this.moveS2();
    }
    moveFwp() {
        this.moveFp();
        this.moveSp();
    }
    moveB() {

        [this.state.B.BUR, this.state.B.BUL, this.state.B.BDL, this.state.B.BDR] = this.cycle1(this.state.B.BUR, this.state.B.BUL, this.state.B.BDL, this.state.B.BDR);
        [this.state.B.BU, this.state.B.BL, this.state.B.BD, this.state.B.BR] = this.cycle1(this.state.B.BU, this.state.B.BL, this.state.B.BD, this.state.B.BR);

        [this.state.U.UB, this.state.L.LB, this.state.D.DB, this.state.R.RB] = this.cycle1(this.state.U.UB, this.state.L.LB, this.state.D.DB, this.state.R.RB);
        [this.state.U.UBL, this.state.L.LDB, this.state.D.DBR, this.state.R.RUB] = this.cycle1(this.state.U.UBL, this.state.L.LDB, this.state.D.DBR, this.state.R.RUB);
        [this.state.U.UBR, this.state.L.LUB, this.state.D.DBL, this.state.R.RDB] = this.cycle1(this.state.U.UBR, this.state.L.LUB, this.state.D.DBL, this.state.R.RDB);
    }
    moveB2() {

        [this.state.B.BUR, this.state.B.BUL, this.state.B.BDL, this.state.B.BDR] = this.cycle2(this.state.B.BUR, this.state.B.BUL, this.state.B.BDL, this.state.B.BDR);
        [this.state.B.BU, this.state.B.BL, this.state.B.BD, this.state.B.BR] = this.cycle2(this.state.B.BU, this.state.B.BL, this.state.B.BD, this.state.B.BR);

        [this.state.U.UB, this.state.L.LB, this.state.D.DB, this.state.R.RB] = this.cycle2(this.state.U.UB, this.state.L.LB, this.state.D.DB, this.state.R.RB);
        [this.state.U.UBL, this.state.L.LDB, this.state.D.DBR, this.state.R.RUB] = this.cycle2(this.state.U.UBL, this.state.L.LDB, this.state.D.DBR, this.state.R.RUB);
        [this.state.U.UBR, this.state.L.LUB, this.state.D.DBL, this.state.R.RDB] = this.cycle2(this.state.U.UBR, this.state.L.LUB, this.state.D.DBL, this.state.R.RDB);
    }
    moveBp() {

        [this.state.B.BUR, this.state.B.BUL, this.state.B.BDL, this.state.B.BDR] = this.cycle3(this.state.B.BUR, this.state.B.BUL, this.state.B.BDL, this.state.B.BDR);
        [this.state.B.BU, this.state.B.BL, this.state.B.BD, this.state.B.BR] = this.cycle3(this.state.B.BU, this.state.B.BL, this.state.B.BD, this.state.B.BR);

        [this.state.U.UB, this.state.L.LB, this.state.D.DB, this.state.R.RB] = this.cycle3(this.state.U.UB, this.state.L.LB, this.state.D.DB, this.state.R.RB);
        [this.state.U.UBL, this.state.L.LDB, this.state.D.DBR, this.state.R.RUB] = this.cycle3(this.state.U.UBL, this.state.L.LDB, this.state.D.DBR, this.state.R.RUB);
        [this.state.U.UBR, this.state.L.LUB, this.state.D.DBL, this.state.R.RDB] = this.cycle3(this.state.U.UBR, this.state.L.LUB, this.state.D.DBL, this.state.R.RDB);
    }
    moveBw() {
        this.moveB();
        this.moveSp();
    }
    moveBw2() {
        this.moveB2();
        this.moveS2();
    }
    moveBwp() {
        this.moveBp();
        this.moveS();
    }
    moveL() {

        [this.state.L.LUF, this.state.L.LDF, this.state.L.LDB, this.state.L.LUB] = this.cycle1(this.state.L.LUF, this.state.L.LDF, this.state.L.LDB, this.state.L.LUB);
        [this.state.L.LU, this.state.L.LF, this.state.L.LD, this.state.L.LB] = this.cycle1(this.state.L.LU, this.state.L.LF, this.state.L.LD, this.state.L.LB);

        [this.state.U.UL, this.state.F.FL, this.state.D.DL, this.state.B.BL] = this.cycle1(this.state.U.UL, this.state.F.FL, this.state.D.DL, this.state.B.BL);
        [this.state.U.UBL, this.state.F.FUL, this.state.D.DFL, this.state.B.BDL] = this.cycle1(this.state.U.UBL, this.state.F.FUL, this.state.D.DFL, this.state.B.BDL);
        [this.state.U.UFL, this.state.F.FDL, this.state.D.DBL, this.state.B.BUL] = this.cycle1(this.state.U.UFL, this.state.F.FDL, this.state.D.DBL, this.state.B.BUL);
    }
    moveL2() {

        [this.state.L.LUF, this.state.L.LDF, this.state.L.LDB, this.state.L.LUB] = this.cycle2(this.state.L.LUF, this.state.L.LDF, this.state.L.LDB, this.state.L.LUB);
        [this.state.L.LU, this.state.L.LF, this.state.L.LD, this.state.L.LB] = this.cycle2(this.state.L.LU, this.state.L.LF, this.state.L.LD, this.state.L.LB);

        [this.state.U.UL, this.state.F.FL, this.state.D.DL, this.state.B.BL] = this.cycle2(this.state.U.UL, this.state.F.FL, this.state.D.DL, this.state.B.BL);
        [this.state.U.UBL, this.state.F.FUL, this.state.D.DFL, this.state.B.BDL] = this.cycle2(this.state.U.UBL, this.state.F.FUL, this.state.D.DFL, this.state.B.BDL);
        [this.state.U.UFL, this.state.F.FDL, this.state.D.DBL, this.state.B.BUL] = this.cycle2(this.state.U.UFL, this.state.F.FDL, this.state.D.DBL, this.state.B.BUL);
    }
    moveLp() {

        [this.state.L.LUF, this.state.L.LDF, this.state.L.LDB, this.state.L.LUB] = this.cycle3(this.state.L.LUF, this.state.L.LDF, this.state.L.LDB, this.state.L.LUB);
        [this.state.L.LU, this.state.L.LF, this.state.L.LD, this.state.L.LB] = this.cycle3(this.state.L.LU, this.state.L.LF, this.state.L.LD, this.state.L.LB);

        [this.state.U.UL, this.state.F.FL, this.state.D.DL, this.state.B.BL] = this.cycle3(this.state.U.UL, this.state.F.FL, this.state.D.DL, this.state.B.BL);
        [this.state.U.UBL, this.state.F.FUL, this.state.D.DFL, this.state.B.BDL] = this.cycle3(this.state.U.UBL, this.state.F.FUL, this.state.D.DFL, this.state.B.BDL);
        [this.state.U.UFL, this.state.F.FDL, this.state.D.DBL, this.state.B.BUL] = this.cycle3(this.state.U.UFL, this.state.F.FDL, this.state.D.DBL, this.state.B.BUL);
    }
    moveLw() {
        this.moveL();
        this.moveM();
    }
    moveLw2() {
        this.moveL2();
        this.moveM2();
    }
    moveLwp() {
        this.moveLp();
        this.moveMp();
    }
    moveD() {

        [this.state.D.DF, this.state.D.DR, this.state.D.DB, this.state.D.DL] = this.cycle1(this.state.D.DF, this.state.D.DR, this.state.D.DB, this.state.D.DL);
        [this.state.D.DFL, this.state.D.DFR, this.state.D.DBR, this.state.D.DBL] = this.cycle1(this.state.D.DFL, this.state.D.DFR, this.state.D.DBR, this.state.D.DBL);

        [this.state.F.FD, this.state.R.RD, this.state.B.BD, this.state.L.LD] = this.cycle1(this.state.F.FD, this.state.R.RD, this.state.B.BD, this.state.L.LD);
        [this.state.F.FDL, this.state.R.RDF, this.state.B.BDR, this.state.L.LDB] = this.cycle1(this.state.F.FDL, this.state.R.RDF, this.state.B.BDR, this.state.L.LDB);
        [this.state.F.FDR, this.state.R.RDB, this.state.B.BDL, this.state.L.LDF] = this.cycle1(this.state.F.FDR, this.state.R.RDB, this.state.B.BDL, this.state.L.LDF);
    }
    moveD2() {

        [this.state.D.DF, this.state.D.DR, this.state.D.DB, this.state.D.DL] = this.cycle2(this.state.D.DF, this.state.D.DR, this.state.D.DB, this.state.D.DL);
        [this.state.D.DFL, this.state.D.DFR, this.state.D.DBR, this.state.D.DBL] = this.cycle2(this.state.D.DFL, this.state.D.DFR, this.state.D.DBR, this.state.D.DBL);

        [this.state.F.FD, this.state.R.RD, this.state.B.BD, this.state.L.LD] = this.cycle2(this.state.F.FD, this.state.R.RD, this.state.B.BD, this.state.L.LD);
        [this.state.F.FDL, this.state.R.RDF, this.state.B.BDR, this.state.L.LDB] = this.cycle2(this.state.F.FDL, this.state.R.RDF, this.state.B.BDR, this.state.L.LDB);
        [this.state.F.FDR, this.state.R.RDB, this.state.B.BDL, this.state.L.LDF] = this.cycle2(this.state.F.FDR, this.state.R.RDB, this.state.B.BDL, this.state.L.LDF);
    }
    moveDp() {

        [this.state.D.DF, this.state.D.DR, this.state.D.DB, this.state.D.DL] = this.cycle3(this.state.D.DF, this.state.D.DR, this.state.D.DB, this.state.D.DL);
        [this.state.D.DFL, this.state.D.DFR, this.state.D.DBR, this.state.D.DBL] = this.cycle3(this.state.D.DFL, this.state.D.DFR, this.state.D.DBR, this.state.D.DBL);

        [this.state.F.FD, this.state.R.RD, this.state.B.BD, this.state.L.LD] = this.cycle3(this.state.F.FD, this.state.R.RD, this.state.B.BD, this.state.L.LD);
        [this.state.F.FDL, this.state.R.RDF, this.state.B.BDR, this.state.L.LDB] = this.cycle3(this.state.F.FDL, this.state.R.RDF, this.state.B.BDR, this.state.L.LDB);
        [this.state.F.FDR, this.state.R.RDB, this.state.B.BDL, this.state.L.LDF] = this.cycle3(this.state.F.FDR, this.state.R.RDB, this.state.B.BDL, this.state.L.LDF);
    }
    moveDw() {
        this.moveD();
        this.moveE();
    }
    moveDw2() {
        this.moveD2();
        this.moveE2();
    }
    moveDwp() {
        this.moveDp();
        this.moveEp();
    }
    moveM() {
        [this.state.U.UF, this.state.F.FD, this.state.D.DB, this.state.B.BU] = this.cycle1(this.state.U.UF, this.state.F.FD, this.state.D.DB, this.state.B.BU);
        [this.state.U.UB, this.state.F.FU, this.state.D.DF, this.state.B.BD] = this.cycle1(this.state.U.UB, this.state.F.FU, this.state.D.DF, this.state.B.BD);
        [this.state.U.center, this.state.F.center, this.state.D.center, this.state.B.center] = this.cycle1(this.state.U.center, this.state.F.center, this.state.D.center, this.state.B.center);
    }
    moveM2() {
        [this.state.U.UF, this.state.F.FD, this.state.D.DB, this.state.B.BU] = this.cycle2(this.state.U.UF, this.state.F.FD, this.state.D.DB, this.state.B.BU);
        [this.state.U.UB, this.state.F.FU, this.state.D.DF, this.state.B.BD] = this.cycle2(this.state.U.UB, this.state.F.FU, this.state.D.DF, this.state.B.BD);
        [this.state.U.center, this.state.F.center, this.state.D.center, this.state.B.center] = this.cycle2(this.state.U.center, this.state.F.center, this.state.D.center, this.state.B.center);
    }
    moveMp() {
        [this.state.U.UF, this.state.F.FD, this.state.D.DB, this.state.B.BU] = this.cycle3(this.state.U.UF, this.state.F.FD, this.state.D.DB, this.state.B.BU);
        [this.state.U.UB, this.state.F.FU, this.state.D.DF, this.state.B.BD] = this.cycle3(this.state.U.UB, this.state.F.FU, this.state.D.DF, this.state.B.BD);
        [this.state.U.center, this.state.F.center, this.state.D.center, this.state.B.center] = this.cycle3(this.state.U.center, this.state.F.center, this.state.D.center, this.state.B.center);
    }
    moveS() {
        [this.state.U.UR, this.state.R.RD, this.state.D.DL, this.state.L.LU] = this.cycle1(this.state.U.UR, this.state.R.RD, this.state.D.DL, this.state.L.LU);
        [this.state.U.UL, this.state.R.RU, this.state.D.DR, this.state.L.LD] = this.cycle1(this.state.U.UL, this.state.R.RU, this.state.D.DR, this.state.L.LD);
        [this.state.U.center, this.state.R.center, this.state.D.center, this.state.L.center] = this.cycle1(this.state.U.center, this.state.R.center, this.state.D.center, this.state.L.center);
    }
    moveS2() {
        [this.state.U.UR, this.state.R.RD, this.state.D.DL, this.state.L.LU] = this.cycle2(this.state.U.UR, this.state.R.RD, this.state.D.DL, this.state.L.LU);
        [this.state.U.UL, this.state.R.RU, this.state.D.DR, this.state.L.LD] = this.cycle2(this.state.U.UL, this.state.R.RU, this.state.D.DR, this.state.L.LD);
        [this.state.U.center, this.state.R.center, this.state.D.center, this.state.L.center] = this.cycle2(this.state.U.center, this.state.R.center, this.state.D.center, this.state.L.center);
    }
    moveSp() {
        [this.state.U.UR, this.state.R.RD, this.state.D.DL, this.state.L.LU] = this.cycle3(this.state.U.UR, this.state.R.RD, this.state.D.DL, this.state.L.LU);
        [this.state.U.UL, this.state.R.RU, this.state.D.DR, this.state.L.LD] = this.cycle3(this.state.U.UL, this.state.R.RU, this.state.D.DR, this.state.L.LD);
        [this.state.U.center, this.state.R.center, this.state.D.center, this.state.L.center] = this.cycle3(this.state.U.center, this.state.R.center, this.state.D.center, this.state.L.center);
    }
    moveE() {
        [this.state.F.FR, this.state.R.RB, this.state.B.BL, this.state.L.LF] = this.cycle1(this.state.F.FR, this.state.R.RB, this.state.B.BL, this.state.L.LF);
        [this.state.F.FL, this.state.R.RF, this.state.B.BR, this.state.L.LB] = this.cycle1(this.state.F.FL, this.state.R.RF, this.state.B.BR, this.state.L.LB);
        [this.state.F.center, this.state.R.center, this.state.B.center, this.state.L.center] = this.cycle1(this.state.F.center, this.state.R.center, this.state.B.center, this.state.L.center);
    }
    moveE2() {
        [this.state.F.FR, this.state.R.RB, this.state.B.BL, this.state.L.LF] = this.cycle2(this.state.F.FR, this.state.R.RB, this.state.B.BL, this.state.L.LF);
        [this.state.F.FL, this.state.R.RF, this.state.B.BR, this.state.L.LB] = this.cycle2(this.state.F.FL, this.state.R.RF, this.state.B.BR, this.state.L.LB);
        [this.state.F.center, this.state.R.center, this.state.B.center, this.state.L.center] = this.cycle2(this.state.F.center, this.state.R.center, this.state.B.center, this.state.L.center);
    }
    moveEp() {
        [this.state.F.FR, this.state.R.RB, this.state.B.BL, this.state.L.LF] = this.cycle3(this.state.F.FR, this.state.R.RB, this.state.B.BL, this.state.L.LF);
        [this.state.F.FL, this.state.R.RF, this.state.B.BR, this.state.L.LB] = this.cycle3(this.state.F.FL, this.state.R.RF, this.state.B.BR, this.state.L.LB);
        [this.state.F.center, this.state.R.center, this.state.B.center, this.state.L.center] = this.cycle3(this.state.F.center, this.state.R.center, this.state.B.center, this.state.L.center);
    }

    move(m: string) {
        switch (m) {
            case 'U': {
                this.moveU();
                break;
            }
            case 'Up': {
                this.moveUp();
                break;
            }
            case 'U2': {
                this.moveU2();
                break;
            }
            case 'Uw': {
                this.moveUw();
                break;
            }
            case 'Uw2': {
                this.moveUw2();
                break;
            }
            case 'Uwp': {
                this.moveUwp();
                break;
            }
            case 'U': {
                this.moveU();
                break;
            }
            case 'Up': {
                this.moveUp();
                break;
            }
            case 'U2': {
                this.moveU2();
                break;
            }
            case 'Uw': {
                this.moveUw();
                break;
            }
            case 'Uw2': {
                this.moveUw2();
                break;
            }
            case 'Uwp': {
                this.moveUwp();
                break;
            }
            case 'F': {
                this.moveF();
                break;
            }
            case 'Fp': {
                this.moveFp();
                break;
            }
            case 'F2': {
                this.moveF2();
                break;
            }
            case 'Fw': {
                this.moveFw();
                break;
            }
            case 'Fw2': {
                this.moveFw2();
                break;
            }
            case 'Fwp': {
                this.moveFwp();
                break;
            }
            case 'R': {
                this.moveR();
                break;
            }
            case 'Rp': {
                this.moveRp();
                break;
            }
            case 'R2': {
                this.moveR2();
                break;
            }
            case 'Rw': {
                this.moveRw();
                break;
            }
            case 'Rw2': {
                this.moveRw2();
                break;
            }
            case 'Rwp': {
                this.moveRwp();
                break;
            }
            case 'B': {
                this.moveB();
                break;
            }
            case 'Bp': {
                this.moveBp();
                break;
            }
            case 'B2': {
                this.moveB2();
                break;
            }
            case 'Bw': {
                this.moveBw();
                break;
            }
            case 'Bw2': {
                this.moveBw2();
                break;
            }
            case 'Bwp': {
                this.moveBwp();
                break;
            }
            case 'L': {
                this.moveL();
                break;
            }
            case 'Lp': {
                this.moveLp();
                break;
            }
            case 'L2': {
                this.moveL2();
                break;
            }
            case 'Lw': {
                this.moveLw();
                break;
            }
            case 'Lw2': {
                this.moveLw2();
                break;
            }
            case 'Lwp': {
                this.moveLwp();
                break;
            }
            case 'D': {
                this.moveD();
                break;
            }
            case 'Dp': {
                this.moveDp();
                break;
            }
            case 'D2': {
                this.moveD2();
                break;
            }
            case 'Dw': {
                this.moveDw();
                break;
            }
            case 'Dw2': {
                this.moveDw2();
                break;
            }
            case 'Dwp': {
                this.moveDwp();
                break;
            }
            default: { 
                console.log("ERROR WRONG MOVE");
                break; 
             } 
        }
    };

}

