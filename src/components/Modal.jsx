import React from "react";

export const Modal = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed translate-y-1/4 z-50 p-4 w-full md:inset-0 md:h-full">
      <div className="relative w-full max-w-2xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative rounded-lg shadow dark:bg-slate-600">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              How to play
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <X size={24} />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              O jogo consiste em acertar o máximo possível de cores em 30s.
              Quando o jogo inicia, uma cor aleatória irá aparecer e para ela
              deverão aparecer 3 opções de resposta (obrigatoriamente em
              hexadecimal). Sendo duas incorretas (geradas aleatoriamente), e
              uma correta. A cada rodada, uma nova cor aparece, e o jogador terá
              10s para responder e resultar em ganho ou perda de pontuação:
            </p>
            <ul className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <li>Se o jogador não responder a tempo, ele perde 2 pontos. </li>
              <li>
                Se o jogador responder a tempo, mas errado, perderá 1 ponto.{" "}
              </li>
              <li>
                Se o jogador responder a tempo e corretamente, ganhará 5 pontos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
