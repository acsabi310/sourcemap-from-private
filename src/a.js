import './a.css';
import b from './b';

console.log('a');
(()=>{ 
	console.log('arrow a ');
	console.log(b);
})();