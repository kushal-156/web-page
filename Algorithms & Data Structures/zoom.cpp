#include<iostream>
using namespace std;

void zoom(){
    int num,i,j,k;char arr[4];
    cout <<"enter any number from 0,1,3,6,7,8,9 : ";
    cin >> arr;
    for (k=0;k<4;k++){num=arr[k];
    switch (num){
        case '0':{
            for (i=0;i<5;i++){
                for (j=0;j<5;j++){
                    if (i==0 || i==4){
                        cout<<"#   ";}
                    else if (j==0){
                        cout<<"#   ";}
                    else if(j==1||j==2||j==3){
                        cout<<"    ";
                    }else if (j==4){
                        cout<<"#   ";
                    }}cout<<endl<<endl;
            }cout<<endl<<endl<<endl;break;}
        case '1':{
            for (i==0;i<5;i++){
                for (j=0;j<5;j++){
                    if ((i==0 &&(j==0 ||j==1))||(i==1 &&j==0)||(i==2&&j==1)||(i==3&&(j==0||j==1))){
                        cout<<"    ";
                    }else if ((i==4 || j==2)||(i==1 &&j==1)||(i==2 && j==0)){
                        cout<<"#   ";
                    }
                    
                    
                }cout<<endl<<endl;;
            }cout<<endl<<endl<<endl;break;}
        case '3':{
            for (i==0;i<5;i++){
                for (j=0;j<5;j++){
                    if (i==0||i==2||i==4||j==4){
                        cout<<"#   ";
                    }else if ((i==1&&(j==0||j==1||j==2||j==3))||i==3&&(j==0||j==1||j==2||j==3)){
                        cout<<"    ";
                    }
                }cout<<endl<<endl;
            }cout<<endl<<endl<<endl;break;}
        case '5':{
            for (i==0;i<5;i++){
                for (j=0;j<5;j++){
                    if (i==0||i==2||i==4||(i==1 &&j==0)||(i==3 && j==4)){
                        cout<<"#   ";
                    }else if ((i==1&&(j==0||j==1||j==2||j==3))||i==3&&(j==0||j==1||j==2||j==3)){
                        cout<<"    ";
                    }
                }cout<<endl<<endl;
            }cout<<endl<<endl<<endl;break;}
        case '6':{
            for (i==0;i<5;i++){
                for (j=0;j<5;j++){
                    if (j==0||i==2||i==4||(i==3&&j==4)){cout<<"#   ";}
                    else if (i==3&&j!=4){cout<<"    ";}
                    }cout<<endl<<endl;}cout<<endl<<endl<<endl;break;}
        case '7':{
            for (i==0;i<5;i++){
                for (j=0;j<5;j++){
                    if (i==0||j==4){cout<<"#    ";}
                    else if (i!=0&&j!=4){cout<<"     ";break;}

                }cout<<endl<<endl;}cout<<endl<<endl<<endl;}
        case '8':{
            for (i==0;i<5;i++){
                for (j=0;j<5;j++){
                    if (i==0||i==2||i==4||j==0||(i==1&&j==4)||(i==3&&j==4)){cout<<"#   ";}
                    else if ((i!=0||i!=2||i!=4||j!=4||j!=0)){cout<<"    ";}
                }cout<<endl<<endl;}cout<<endl<<endl<<endl;break;
        }case '9':{
            for (i==0;i<5;i++){
                for (j=0;j<5;j++){
                    if (i==0||i==2||j==4||(i==1&&j==0)){
                        cout<<"#   ";
                    }else if ((i!=0||i!=2)&&j!=4){cout<<"    ";}
                }cout<<endl<<endl;}cout<<endl<<endl<<endl;break;
        }
}}}
int main(){
    zoom();
    return 0;
}