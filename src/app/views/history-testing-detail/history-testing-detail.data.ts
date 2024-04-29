import {Activities} from '@constants/enum.constants';
import {TestingHistory} from '@admin/admin.interface';
import {objectToFormGroup} from '@utils/object.utils';
import {GrammarResultComponent} from '@components/grammar-result/grammar-result.component';
import {ReadingResultComponent} from '@components/reading-result/reading-result.component';
import {ListeningResultComponent} from '@components/listening-result/listening-result.component';
import {DictionaryResultComponent} from '@components/dictionary-result/dictionary-result.component';
import {WritingResultComponent} from '@components/writing-result/writing-result.component';
import {ResultActivity} from './history-testing-detail.interface';



export function resultActivities(history: TestingHistory): ResultActivity[] {
	const result: ResultActivity[] = [
	{
		title: 'Writing',
		component: WritingResultComponent,
		inputs: {
			formGroup: objectToFormGroup(history[Activities.WRITING])
		}
	},
	{
		title: 'Dictionary',
		component: DictionaryResultComponent,
		inputs: {
			formGroup: objectToFormGroup(history[Activities.DICTIONARY])
		}
	},
	{
		title: 'Grammar',
		component: GrammarResultComponent,
		inputs: {
			formGroup: objectToFormGroup(history[Activities.GRAMMAR])
		}
	},
	{
		title: 'Reading',
		component: ReadingResultComponent,
		inputs: {
			formGroup: objectToFormGroup(history[Activities.READING])
		}
	},
	{
		title: 'Listening',
		component: ListeningResultComponent,
		inputs: {
			formGroup: objectToFormGroup(history[Activities.LISTENING])
		}
	},
	];
	return result;
}