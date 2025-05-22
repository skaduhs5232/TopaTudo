import json
from pathlib import Path


def load_dbconfig(env="development"):
    config_path = Path(__file__).parent / "dbconfig.json"
    try:
        with open(config_path) as f:
            configs = json.load(f)
            return configs[env]

    except FileNotFoundError:
        raise Exception("Arquivo de configuração não encontrado")
    except KeyError:
        raise Exception(f"Ambiente {env} não configurado")
    except json.JSONDecodeError:
        raise Exception("Erro na formatação do JSON")
