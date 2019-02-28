using AttachMore.NextGen.Core.DomainModels.Attachment;
using AttachMore.NextGen.Core.IRepositories.Attachment;
using AttachMore.NextGen.Core.IServices.Attachment;
using AttachMore.NextGen.Infrastructure.DataAccess.EntityModel.Attachment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AttachMore.NextGen.Infrastructure.Services.Attachment
{
    /// <summary>
    /// AttachmentNotificationSettingsService
    /// </summary>
    /// <seealso cref="AttachMore.NextGen.Core.IServices.Attachment.IAttachmentNotificationSettingsService" />
    public class AttachmentNotificationSettingsService : IAttachmentNotificationSettingsService
    {
        /// <summary>
        /// The m attachment notification settings service
        /// </summary>
        IAttachmentNotificationSettingsRepository m_AttachmentNotificationSettingsService;

        /// <summary>
        /// Initializes a new instance of the <see cref="AttachmentNotificationSettingsService"/> class.
        /// </summary>
        public AttachmentNotificationSettingsService(IAttachmentNotificationSettingsRepository AttachmentNotificationSettingsService)
        {
            this.m_AttachmentNotificationSettingsService = AttachmentNotificationSettingsService;
        }

        /// <summary>
        /// Adds the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <exception cref="NotImplementedException"></exception>
        public AttachmentNotificationSettingsModel Add(AttachmentNotificationSettingsModel model)
        {
            try
            {
                var entity = new AttachmentNotificationSettings()
                {
                    AttachmentId = model.AttachmentId,
                    ByEmail = model.ByEmail,
                    ByText = model.ByText,
                    WhenDownload = model.WhenDownload,
                    WhenExpired = model.WhenExpired,
                    CreatedOn = DateTime.Now,
                    UpdatedOn = DateTime.Now
                };

                this.m_AttachmentNotificationSettingsService.Add(entity);
                return model;
            }
            catch (Exception ex)
            {
                var message = string.Format("{0} {1} {2}", ex.InnerException == null ? ex.Message : ex.InnerException.Message, Environment.NewLine, ex.StackTrace);
                throw new Exception(message);
            }
        }
    }
}
