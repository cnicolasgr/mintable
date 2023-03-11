import { GoogleConfig, defaultGoogleConfig } from '../../types/integrations/google'
import { updateConfig, getConfig } from '../../common/config'
import prompts from 'prompts'
import { IntegrationId } from '../../types/integrations'
import open from 'open'
import { GoogleIntegration } from './googleIntegration'
import { logInfo, logError } from '../../common/logging'

export default async () => {
    return new Promise<void>(async (resolve, reject) => {
        try {
            console.log('\nApplying template to all sheets...\n')

            const config = getConfig()
            const google = new GoogleIntegration(config)
            await google.reapplyTemplate()
          
            logInfo('Successfully applied template to sheets.')
            return resolve()
        } catch (e) {
            logError('Unable to apply template.', e)
            return reject()
        }
    })
}
