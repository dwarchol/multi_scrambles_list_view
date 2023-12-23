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

    moveR(){

        [this.state.R.RUF,this.state.R.RUB,this.state.R.RDB,this.state.R.RDF] = this.cycle1(this.state.R.RUF,this.state.R.RUB,this.state.R.RDB,this.state.R.RDF);
        [this.state.R.RU,this.state.R.RB,this.state.R.RD,this.state.R.RF] = this.cycle1(this.state.R.RU,this.state.R.RB,this.state.R.RD,this.state.R.RF);

        [this.state.U.UR,this.state.B.BR,this.state.D.DR,this.state.F.FR] = this.cycle1(this.state.U.UR,this.state.B.BR,this.state.D.DR,this.state.F.FR);
        [this.state.U.UBR,this.state.B.BDR,this.state.D.DFR,this.state.F.FUR] = this.cycle1(this.state.U.UBR,this.state.B.BDR,this.state.D.DFR,this.state.F.FUR);
        [this.state.U.UFR,this.state.B.BUR,this.state.D.DBR,this.state.F.FDR] = this.cycle1(this.state.U.UFR,this.state.B.BUR,this.state.D.DBR,this.state.F.FDR);
    }
    moveR2(){

        [this.state.R.RUF,this.state.R.RUB,this.state.R.RDB,this.state.R.RDF] = this.cycle2(this.state.R.RUF,this.state.R.RUB,this.state.R.RDB,this.state.R.RDF);
        [this.state.R.RU,this.state.R.RB,this.state.R.RD,this.state.R.RF] = this.cycle2(this.state.R.RU,this.state.R.RB,this.state.R.RD,this.state.R.RF);

        [this.state.U.UR,this.state.B.BR,this.state.D.DR,this.state.F.FR] = this.cycle2(this.state.U.UR,this.state.B.BR,this.state.D.DR,this.state.F.FR);
        [this.state.U.UBR,this.state.B.BDR,this.state.D.DFR,this.state.F.FUR] = this.cycle2(this.state.U.UBR,this.state.B.BDR,this.state.D.DFR,this.state.F.FUR);
        [this.state.U.UFR,this.state.B.BUR,this.state.D.DBR,this.state.F.FDR] = this.cycle2(this.state.U.UFR,this.state.B.BUR,this.state.D.DBR,this.state.F.FDR);
    }
    moveRp(){

        [this.state.R.RUF,this.state.R.RUB,this.state.R.RDB,this.state.R.RDF] = this.cycle3(this.state.R.RUF,this.state.R.RUB,this.state.R.RDB,this.state.R.RDF);
        [this.state.R.RU,this.state.R.RB,this.state.R.RD,this.state.R.RF] = this.cycle3(this.state.R.RU,this.state.R.RB,this.state.R.RD,this.state.R.RF);

        [this.state.U.UR,this.state.B.BR,this.state.D.DR,this.state.F.FR] = this.cycle3(this.state.U.UR,this.state.B.BR,this.state.D.DR,this.state.F.FR);
        [this.state.U.UBR,this.state.B.BDR,this.state.D.DFR,this.state.F.FUR] = this.cycle3(this.state.U.UBR,this.state.B.BDR,this.state.D.DFR,this.state.F.FUR);
        [this.state.U.UFR,this.state.B.BUR,this.state.D.DBR,this.state.F.FDR] = this.cycle3(this.state.U.UFR,this.state.B.BUR,this.state.D.DBR,this.state.F.FDR);
    }
    moveU(){

    }
    moveF(){

    }
}

