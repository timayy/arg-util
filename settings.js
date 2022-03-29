let dashboard_links = {
    'Ingestion': 'https://atlassian.signalfx.com/#/dashboard/E8fHk41A0AE?groupId=E8fHFPZA0AI&configId=E8fHlExA4AA&variables%5B%5D=aws_tag_environment_type%3Daws_tag_environment_type:&variables%5B%5D=aws_tag_environment%3Daws_tag_environment:%5B%22dev-west2%22%5D&variables%5B%5D=environment_type%3Denvironment_type:%5B%22dev%22%5D&variables%5B%5D=environment%3Denvironment:%5B%22dev-west2%22%5D&density=2',
    'ElasticSearch': 'https://atlassian.signalfx.com/#/dashboard/D4T8wyfA4AA?groupId=E8fHHa2A0A8&configId=FBY4bEwAwAA&sources%5B%5D=aws_region:%5B%22*%22%5D&sources%5B%5D=aws_tag_micros_service_id:%5B%22worklens%22%5D&sources%5B%5D=aws_tag_environment:dev-west2&density=4',
    'DynamoDB': 'https://atlassian.signalfx.com/#/dashboard/EhCLfU2A0AA?groupId=E8fHHa2A0A8&configId=FBY4bErA0AA&variables%5B%5D=aws_tag_environment_type%3Daws_tag_environment_type:%5B%22dev%22%5D&variables%5B%5D=Deployment%20environment%20type%3Ddeployment_env_type:%5B%22dev-west2%22%5D&variables%5B%5D=environment_type%3Denvironment_type:%5B%22dev-west2%22%5D&density=4&sources%5B%5D=aws_tag_environment:dev-west2',
    'SLOs': 'https://atlassian.signalfx.com/#/dashboard/E_YlYrTAwAA?groupId=E8fHFPZA0AI&configId=E_YlYvMA4AE&variables%5B%5D=QueueName%3DQueueName:&variables%5B%5D=environment_type%3Denvironment_type:%5B%22dev%22%5D&variables%5B%5D=aws_tag_environment_type%3Daws_tag_environment_type:%5B%22dev-west2%22%5D&variables%5B%5D=aws_tag_environment%3Daws_tag_environment:%5B%22dev-west2%22%5D&density=4',
    'GraphQL V2': 'https://atlassian.signalfx.com/#/dashboard/FLmgstHAwAE?groupId=E8fHFPZA0AI&configId=FLmgs05A0Ac&selectedEventOverlays=yYSHf2&selectedEventOverlays=XUG3C9&variables%5B%5D=environment_type%3Denvironment_type:%5B%22dev%22%5D&variables%5B%5D=environment%3Denvironment:%5B%22dev-west2%22%5D',
    'GraphQL V3': 'linkheredashboard',
}

let log_links = {
    'Worklens Logs': 'linkherelog',
    'PerfCluster Logs': 'linkherelog',
}

let aws_links = {
    'Worklens DynamoDB': 'linkhereaws',
}