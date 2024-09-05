#include <iostream>
using namespace std;

int main () {
  cout << "*************************************" << endl;
  cout << "* Bem-vindos ao jogo da adivinhacao *" << endl;
  cout << "*************************************" << endl;

  const int NUMERO_SECRETO = 42;
  bool nao_acertou = true;
  int tentativas = 0;

  double pontos = 1000.0;


  while(nao_acertou) {
    int chute;
    tentativas++;
    cout << "Tentativa numero: " << tentativas << endl;
    cout << "Qual valor do seu chute? " << endl;
    cin >> chute;

    double ponstos_perdidos = abs(chute - NUMERO_SECRETO)/2.0;
    pontos = pontos - ponstos_perdidos;


    cout << "Valor do seu chute: " << chute << endl;
    bool acertou = chute == NUMERO_SECRETO;
    bool maior = chute > NUMERO_SECRETO;

    if(acertou) {
      cout << "Parabens, voce acertou o numero secreto " << endl;
      nao_acertou = false;
    }
    else if (maior) {
      cout << "Seu chute foi maior que o numero secreto " << endl;
    }
    else {
      cout << "Seu chute foi menor que o numero secreto " << endl;
    }
  }
  cout << "Fim de jogo!" << endl;
  cout << "Voce acertou o numero secreto em " << tentativas <<" tentativas." <<endl;
  cout.precision(2);
  cout << fixed;
  cout << "Sua pontuacao foi de: " << pontos <<" pontos" <<endl;
}